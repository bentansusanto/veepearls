type Occasions = {
    heading: string;
    body: string;
    image: string;
}

type Detail = {
    heading: string;
    description: string[];
    image?: string;
}

type OcationSteps = {
    name_steps: string;
    image: string;
    description: string[]
}

export interface Anniversary extends Occasions {
    details: Detail[]
}

export interface Birthday extends Occasions {
    details: Detail[]
}

export interface Holidays extends Occasions{
    steps: OcationSteps[]
}

export interface Weddings extends Occasions{
    steps: OcationSteps[]
}