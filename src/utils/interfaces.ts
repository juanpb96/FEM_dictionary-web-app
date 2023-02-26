// Interfaces generated by https://app.quicktype.io/

export interface Response {
    word:       string;
    phonetic:   string;
    phonetics:  Phonetic[];
    meanings:   Meaning[];
    license:    License;
    sourceUrls: string[];
  }
  
  export interface License {
    name: Name;
    url:  string;
  }
  
  export enum Name {
    BySa30 = "BY-SA 3.0",
    BySa40 = "BY-SA 4.0",
    CcBySa30 = "CC BY-SA 3.0",
  }
  
  export interface Meaning {
    partOfSpeech: string;
    definitions:  Definition[];
    synonyms:     string[];
    antonyms:     any[];
  }
  
  export interface Definition {
    definition: string;
    synonyms:   string[];
    antonyms:   any[];
    example?:   string;
  }
  
  export interface Phonetic {
    text:      string;
    audio:     string;
    sourceUrl: string;
    license:   License;
  }