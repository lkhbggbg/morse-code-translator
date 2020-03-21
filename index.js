#!/usr/bin/env node

function main () {
  const phrase = getPhraseFromArgs()
  const morseCode = convertEnglishIntoMorseCode(phrase)
}

function getPhraseFromArgs () {
  const args = process.argv
  const phraseParts = args.slice(2)
  const phrase = phraseParts.join(' ')

  return phrase
}

const CHARACTER_MAP = new Map([
  ['A', '.-'],
  ['B', '-...'],
  ['C', '-.-.'],
  ['D', '-..'],
  ['E', '.'],
  ['F', '..-.'],
  ['G', '--.'],
  ['H', '....'],
  ['I', '..'],
  ['J', '.---'],
  ['K', '-.-'],
  ['L', '.-..'],
  ['M', '--'],
  ['N', '-.'],
  ['O', '---'],
  ['P', '.--.'],
  ['Q', '--.-'],
  ['R', '.-.'],
  ['S', '...'],
  ['T', '-'],
  ['U', '..-'],
  ['V', '...-'],
  ['W', '.--'],
  ['X', '-..-'],
  ['Y', '-.--'],
  ['Z', '--..'],
  ['1', '.----'],
  ['2', '..---'],
  ['3', '...--'],
  ['4', '....-'],
  ['5', '.....'],
  ['6', '-....'],
  ['7', '--...'],
  ['8', '---..'],
  ['9', '----.'],
  ['0', '-----'],
  [',', '--..--'],
  ['?', '..--..'],
  [':', '---...'],
  ['-', '-....-'],
  ['"', '.-..-.'],
  ['(', '-.--.'],
  ['[', '-.--.'],
  ['=', '-...-'],
  ['.', '.-.-.-'],
  [';', '-.-.-.'],
  ['/', '-..-.'],
  ['\'', '.----.'],
  ['_', '..--.-'],
  [')', '-.--.-'],
  [']', '-.--.-'],
  ['+', '.-.-.'],
  ['@', '.--.-.'],
  [' ', ' '],
  ['\n', ' '],
  ['\f', ' ']
])

const END_OF_MESSAGE = '.-.-.'

function convertEnglishIntoMorseCode (_phrase) {
  const phrase = _phrase.toUpperCase()
  const morseParts = phrase.split('').map((char, index) => {
    if (!CHARACTER_MAP.has(char)) {
      throw Error(`Invalid character found at position ${index} of the message`)
    }

    return CHARACTER_MAP.get(char)
  }).concat([' ', END_OF_MESSAGE])

  const morse = morseParts.join(' ')

  return morse
}

main()
