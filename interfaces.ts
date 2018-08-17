export interface InlineManualTracking {
    /**
    * uid is mandated, all other properties are optional
    */
    uid: string;
    email?: string;
    username?: string;
    name?: string;
    created?: Date,
    updated?: Date,
    roles?: string[];
    group?: string;
    plan?: string;
}

export interface User {
    userId: string;
    email: string;
    name: string;
}
