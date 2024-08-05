import { Contents } from "./GlobalType"

type typePearlProps = {
    name_type: string;
    description: string;
    image: string;
    color_bg: string;
}

type colorProps = {
    name_color: string;
    color: string;
    description: string[];
    image: string[]
}

type gradingProps = {
    name_pearl: string;
    description: string;
}

type Grade = {
    name_grade: string
}

type PearlGrade = {
  information: string;
  surface: string;
  luster: string;
  shape: string;
}

type NecklareProps = {
    name_length: string;
    description: string;
    size: string;
    image: string;
}

type PearlProps = {
    heading: string;
    body: string[];
    image: string;
}


// type pearlType
export interface PearlType extends Contents {
    pearl_type:typePearlProps[]
}

// type pearlColor
export interface PearlColor extends Contents{
    pearl_color: colorProps[]
}

// type pearlGrading
export interface PearlGrading extends Contents{
    pearl_type: gradingProps[];
    grade: Grade[];
    info: PearlGrade[] 
}

// type necklare length
export interface NecklareLength extends Contents{
    necklareData: NecklareProps[]
}

export interface AboutPearls extends Contents{
    content: PearlProps
}