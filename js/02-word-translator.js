const languageCode = prompt('Select from the following language code: \n\n"es", "de", "en", and "fr"\n');

// Conditional 'if statement' provides output based on variable value from prompt.

if(languageCode === 'es'){
    alert('Hello World translated in Spanish is: Hola mundo.');
}else if(languageCode === 'de'){
    alert('Hello World translated in German is: Hallo welt.');
}else if(languageCode === 'en'){
    alert('Hello World translated in English is: Hello world.');
} else if(languageCode === 'fr'){
    alert('Hello World translated in French is: Bonjour le monde.');
}else{
    alert('Hello World translated in English is: Hello world.');
};


console.log(languageCode);
