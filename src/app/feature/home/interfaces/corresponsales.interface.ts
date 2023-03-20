export interface Corresponsales {
    corCorresponsalId: string;
    corNombre:         string;
    oficinas:          Oficina[];
}

export interface Oficina {
    ofiOficinaId:      string;
    ofiNombre:         string;
    giros:             any[];
    ofiCorresponsalId: OfiCorresponsalID;
}

export interface OfiCorresponsalID {
    corCorresponsalId: string;
    corNombre:         string;
}