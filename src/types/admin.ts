export interface Update {
    id: number;
    title: string;
    date: string;
    description: string;
    category: string;
    location: string;
    image: string;
}

export interface Darshan {
    id: number;
    title: string;
    date: string;
    imageUrl: string;
    category: string;
}

export interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    category: string;
    attendees: number;
    description: string;
    image: string;
}

export interface Video {
    id: number;
    title: string;
    duration: string;
    category: string;
    thumbnail: string;
    description: string;
    videoUrl: string;
}

export interface Audio {
    id: number;
    title: string;
    duration: string;
    artist: string;
    category: string;
    audioUrl: string;
}

export interface SatsangArticle {
    id: number;
    title: string;
    type: string;
    author: string;
    date: string;
    description: string;
    content: string;
    image: string;
}

export interface Practice {
    id: number;
    title: string;
    category: string;
    points: number;
    description: string;
    instructions: string[];
    benefit: string;
    image: string;
}

export interface Publication {
    id: number;
    title: string;
    format: string;
    size: string;
    date: string;
    type: string;
    description: string;
}

export interface Inquiry {
    id: number;
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    date: string;
    status: string;
}
