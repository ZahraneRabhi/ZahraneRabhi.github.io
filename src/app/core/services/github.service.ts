import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private cacheTime = 24 * 60 * 60 * 1000; // 24 hours cache duration
  private cachePrefix = 'github_cache_';
  
  constructor(private http: HttpClient) {}

  getData(username: string): Observable<any> {
    const cacheKey = `${this.cachePrefix}user_${username}`;
    const cachedData = this.getFromCache(cacheKey);
    
    if (cachedData) {
      return of(cachedData);
    }
    
    return this.http.get(`https://api.github.com/users/${username}`).pipe(
      tap(data => this.saveToCache(cacheKey, data))
    );
  }

  getRepos(username: string): Observable<any> {
    const cacheKey = `${this.cachePrefix}repos_${username}`;
    const cachedData = this.getFromCache(cacheKey);
    
    if (cachedData) {
      return of(cachedData);
    }
    
    return this.http.get(`https://api.github.com/users/${username}/repos`).pipe(
      tap(data => this.saveToCache(cacheKey, data)),
      catchError(error => {
        console.error('API error for repos:', error);
        // Return cached data even if expired, or empty array if nothing is cached
        return of(this.getFromCache(cacheKey, true) || []);
      })
    );
  }  

  getRepoCommits(reponame: string, username: string): Observable<any> {
    const cacheKey = `${this.cachePrefix}commits_${username}_${reponame}`;
    const cachedData = this.getFromCache(cacheKey);
    
    if (cachedData) {
      return of(cachedData);
    }
    
    return this.http.get(`https://api.github.com/repos/${username}/${reponame}/commits`).pipe(
      tap(data => this.saveToCache(cacheKey, data)),
      catchError(error => {
        console.error(`API error for commits in ${reponame}:`, error);
        // Return cached data even if expired, or empty array if nothing is cached
        return of(this.getFromCache(cacheKey, true) || []);
      })
    );
  }
  
  getStars(reponame: string, username: string): Observable<any> {
    const cacheKey = `${this.cachePrefix}stars_${username}_${reponame}`;
    const cachedData = this.getFromCache(cacheKey);
    
    if (cachedData) {
      return of(cachedData);
    }
    
    return this.http.get(`https://api.github.com/repos/${username}/${reponame}/stargazers`).pipe(
      tap(data => this.saveToCache(cacheKey, data)),
      catchError(error => {
        console.error(`API error for stars in ${reponame}:`, error);
        // Return cached data even if expired, or empty array if nothing is cached
        return of(this.getFromCache(cacheKey, true) || []);
      })
    );
  }

  // Cache helpers
  private saveToCache(key: string, data: any): void {
    try {
      const cacheItem = {
        timestamp: new Date().getTime(),
        data: data
      };
      localStorage.setItem(key, JSON.stringify(cacheItem));
    } catch (e) {
      console.error('Error saving to cache:', e);
    }
  }

  private getFromCache(key: string, ignoreExpiry: boolean = false): any {
    try {
      const cachedItem = localStorage.getItem(key);
      if (!cachedItem) return null;
      
      const { timestamp, data } = JSON.parse(cachedItem);
      const now = new Date().getTime();
      
      if (ignoreExpiry || now - timestamp < this.cacheTime) {
        return data;
      }
      return null;
    } catch (e) {
      console.error('Error retrieving from cache:', e);
      return null;
    }
  }
  
  // Forces a refresh of all cached data
  refreshAllData(username: string): void {
    this.getData(username).subscribe();
    this.getRepos(username).subscribe(repos => {
      if (repos && repos.length) {
        repos.forEach((repo: any) => {
          this.getRepoCommits(repo.name, username).subscribe();
          this.getStars(repo.name, username).subscribe();
        });
      }
    });
  }
}
