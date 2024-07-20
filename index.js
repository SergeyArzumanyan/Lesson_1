/** Using slice because first 2 values are directory paths */
const args = process.argv.slice(2);

/** For keeping arguments as key-value pairs */
const params = {};

/** i += 2 because it's this structure [--key1, val1, --key2, val2] */
for (let i = 0; i < args.length; i += 2) {
    const key = args[i];
    const val = args[i + 1];

    /** Keeping in params object, because it's more convenient */
    params[key] = val;
}

/** Getting resulting params */
const langGreetings = {
    en: 'Hello',
    am: 'Barev',
    it: 'Ciao',
    fr: 'Bonjour',
    es: 'Hola',
};

const defaultGreeting = 'Hello';
const defaultName = 'John';
const defaultLanguage = 'en';
const defaultLevel = '1';

const resultingLang = (params['--language'] || params['-l']) || defaultLanguage;
const resultingGreeting = (params['--greeting'] || params['-g']) || langGreetings[resultingLang] || defaultGreeting;
const resultingName = (params['--name'] || params['-n']) || defaultName;
const resultingLevel = (params['--level'] || params['-lvl']) || defaultLevel;
/** */

/** Causing output */
switch (resultingLevel) {
    case '2':
        console.log(`${resultingGreeting}, ${resultingName} (Date and Time: ${getAndFormatCurrentDate()})`);
        break;
    default:
        console.log(`${resultingGreeting}, ${resultingName}`);
        break;
}

/** Helper function for formating date */
function getAndFormatCurrentDate() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
