# Node.js Greetings CLI

This Node.js script generates a customizable greeting message based on command-line arguments.

## Features

- Supports multiple predefined languages
- Customizable CLI arguments

## Usage

Run the script using Node.js with the following optional arguments:

```bash
node . [--language/-l <language>] [--greeting/-g <greeting>] [--name/-n <name>] [--level/-lvl <level>]
```

### CLI Arguments

- `--language` or `-l`: Set the language (default: 'en')
- `--greeting` or `-g`: Set a custom greeting
- `--name` or `-n`: Set the name to greet (default: 'John')
- `--level` or `-lvl`: Set the output level (1 or 2, default: 1)

### Supported Pre-Defined Languages

- English (en)
- Armenian (am)
- Italian (it)
- French (fr)
- Spanish (es)

If an unsupported language is specified, the default `en` greeting will be used.

### Output Levels

- Level 1: Basic greeting
- Level 2: Greeting with current date and time

## Examples

1. Basic usage:
```bash
node .
```
Output: `Hello, John`

2. Custom language:
```bash
node . --language it
```
Output: `Ciao, John`

3. Custom greeting and name:
```bash
node . --greeting "Good morning" --name Poxos
```
Output: `Good morning, Poxos`

4. Level 2 output:
```bash
   node . --level 2
```

Output: `Hello, John (Date and Time: YYYY-MM-DD HH:MM:SS)`

## How It Works

1. The script parses command-line arguments and stores them in a `params` object.
2. It then determines the resulting language, greeting, name, and output level based on the provided arguments or default values.
3. Finally, it outputs the greeting message according to the specified level.

## Helper Function

The script includes a helper function `getAndFormatCurrentDate()` that returns the current date and time in the format `YYYY-MM-DD HH:MM:SS`.