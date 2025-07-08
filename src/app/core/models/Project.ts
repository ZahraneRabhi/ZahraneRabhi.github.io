export class Project {
    id?: string;
    name?: string;
    description?: string;
    longDescription?: string;
    stack?: Stack[];
    link?: string;
    image?: string;
    githubLink?: string;
    liveDemo?: string;
    features?: string[];
    screenshots?: string[];
    releaseDate?: string;
    category?: string;
}

export class Stack {
    icon?: string;
    label?: string;
}