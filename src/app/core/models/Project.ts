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
    category?: string[]; // Updated to match the shared ProjectService interface
}

export class Stack {
    icon?: string;
    label?: string;
}