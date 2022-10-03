// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.


const dna = "TTTT"
const dnb = "GCAT"
const dnc = "GACCGCCGCCTTT"

function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    let rna = ""
    for (const letter of dna) {
        if (letter === "T") {
            rna += "U"
        } else {
            rna += letter
        }
    }
    return rna
}

console.log(DNAtoRNA(dna))
console.log(DNAtoRNA(dnb))
console.log(DNAtoRNA(dnc))

// most common solution, I didnt want to use replace on purpose 

function DNAtoRNABP(dna) {
    return dna.replace(/T/g, 'U');
}

console.log(DNAtoRNABP(dna))
console.log(DNAtoRNABP(dnb))
console.log(DNAtoRNABP(dnc))
