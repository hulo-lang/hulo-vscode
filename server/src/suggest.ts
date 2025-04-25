import { CompletionItem, CompletionItemKind, MarkedString, MarkupKind } from 'vscode-languageserver';

export const completionItems: CompletionItem[] = [
	{
		label: "mod",
		kind: CompletionItemKind.Keyword,
		detail: "module",
		documentation: ""
	},
	{
		label: 'mod',
		kind: CompletionItemKind.Snippet,
		detail: "module declaration",
		documentation: {
			kind: MarkupKind.Markdown,
			value: ['```hulo', "mod name {\n\n}", '```'].join('\n')
		},
		insertText: "mod name {\n\n}"
	},
	{
		label: 'use',
		kind: CompletionItemKind.Keyword,
		detail: "add item to module",
		documentation: ""
	},
	{
		label: 'import',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'from',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'type',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'typeof',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'as',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'if',
		kind: CompletionItemKind.Snippet,
		detail: "if statement",
		documentation: {
			kind: MarkupKind.Markdown,
			value: ['```hulo', "if condition {\n\n}", '```'].join('\n')
		},
		insertText: "if condition {\n\n}"
	},
	{
		label: 'if',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'else',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'match',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'match',
		kind: CompletionItemKind.Snippet,
		detail: "match statement",
		documentation: {
			kind: MarkupKind.Markdown,
			value: ['```hulo', "match $v {\n\t_ => expression,\n}", '```'].join('\n')
		},
		insertText: "match $v {\n\t_ => expression,\n}"
	},
	{
		label: 'do',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'loop',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'while',
		kind: CompletionItemKind.Snippet,
		detail: "loop statement",
		documentation: {
			kind: MarkupKind.Markdown,
			value: ['```hulo', "loop {\n\n}", '```'].join('\n')
		},
		insertText: "loop {\n\n}"
	},
	{
		label: 'dowhile',
		kind: CompletionItemKind.Snippet,
		detail: "loop statement",
		documentation: {
			kind: MarkupKind.Markdown,
			value: ['```hulo', "do {\n\n} loop ( condition )", '```'].join('\n')
		},
		insertText: "do {\n\n} loop ( condition )"
	},
	{
		label: 'for',
		kind: CompletionItemKind.Snippet,
		detail: "loop statement",
		documentation: {
			kind: MarkupKind.Markdown,
			value: ['```hulo', "loop (let i = 0; $i < $count; $i++) {\n\n}", '```'].join('\n')
		},
		insertText: "loop (let i = 0; $i < $count; $i++) {\n\n}"
	},
	{
		label: 'foreach',
		kind: CompletionItemKind.Snippet,
		detail: "loop statement",
		documentation: {
			kind: MarkupKind.Markdown,
			value: ['```hulo', "loop (i, v) in $kv {\n\n}", '```'].join('\n')
		},
		insertText: "loop (i, v) in $kv {\n\n}"
	},
	{
		label: 'range',
		kind: CompletionItemKind.Snippet,
		detail: "loop statement",
		documentation: {
			kind: MarkupKind.Markdown,
			value: ['```hulo', "loop i in range(0, 10, 1) {\n\n}", '```'].join('\n')
		},
		insertText: "loop i in range(0, 10, 1) {\n\n}"
	},
	{
		label: 'in',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'continue',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'unsafe',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'break',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'return',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'let',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'const',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'var',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'static',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'final',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'pub',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'required',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'try',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'try',
		kind: CompletionItemKind.Snippet,
		detail: "try statement",
		documentation: {
			kind: MarkupKind.Markdown,
			value: ['```hulo', "try {\n\n}", '```'].join('\n')
		},
		insertText: "try {\n\n}"
	},
	{
		label: 'catch',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'catch',
		kind: CompletionItemKind.Snippet,
		detail: "catch statement",
		documentation: {
			kind: MarkupKind.Markdown,
			value: ['```hulo', "catch {\n\n}", '```'].join('\n')
		},
		insertText: "catch {\n\n}"
	},
	{
		label: 'finally',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'finally',
		kind: CompletionItemKind.Snippet,
		detail: "finally statement",
		documentation: {
			kind: MarkupKind.Markdown,
			value: ['```hulo', "finally {\n\n}", '```'].join('\n')
		},
		insertText: "finally {\n\n}"
	},
	{
		label: 'throw',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'throws',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'fn',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'fn',
		kind: CompletionItemKind.Snippet,
		detail: "function declaration",
		documentation: {
			kind: MarkupKind.Markdown,
			value: ['```hulo', "fn name() {\n\n}", '```'].join('\n')
		},
		insertText: "fn name() {\n\n}"
	},
	{
		label: 'operator',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'enum',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'enum',
		kind: CompletionItemKind.Snippet,
		detail: "enum declaration",
		documentation: {
			kind: MarkupKind.Markdown,
			value: ['```hulo', "enum name {\n\n}", '```'].join('\n')
		},
		insertText: "enum name {\n\n}"
	},
	{
		label: 'class',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'class',
		kind: CompletionItemKind.Snippet,
		detail: "class declaration",
		documentation: {
			kind: MarkupKind.Markdown,
			value: ['```hulo', "class name {\n\n}", '```'].join('\n')
		},
		insertText: "class name {\n\n}"
	},
	{
		label: 'trait',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'trait',
		kind: CompletionItemKind.Snippet,
		detail: "trait declaration",
		documentation: {
			kind: MarkupKind.Markdown,
			value: ['```hulo', "trait name {\n\n}", '```'].join('\n')
		},
		insertText: "trait name {\n\n}"
	},
	{
		label: 'impl',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'for',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'impl',
		kind: CompletionItemKind.Snippet,
		detail: "impl declaration",
		documentation: {
			kind: MarkupKind.Markdown,
			value: ['```hulo', "impl trait_name for class_name {\n\n}", '```'].join('\n')
		},
		insertText: "impl trait_name for class_name {\n\n}"
	},
	{
		label: 'extends',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'extension',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'extendm',
		kind: CompletionItemKind.Snippet,
		detail: "extend declaration",
		documentation: {
			kind: MarkupKind.Markdown,
			value: ['```hulo', "extension mod name {\n\n}", '```'].join('\n')
		},
		insertText: "extend mod name {\n\n}"
	},
	{
		label: 'extende',
		kind: CompletionItemKind.Snippet,
		detail: "extend declaration",
		documentation: {
			kind: MarkupKind.Markdown,
			value: ['```hulo', "extension enum name {\n\n}", '```'].join('\n')
		},
		insertText: "extend enum name {\n\n}"
	},
	{
		label: 'extendc',
		kind: CompletionItemKind.Snippet,
		detail: "extend declaration",
		documentation: {
			kind: MarkupKind.Markdown,
			value: ['```hulo', "extension class name {\n\n}", '```'].join('\n')
		},
		insertText: "extend class name {\n\n}"
	},
	{
		label: 'extendt',
		kind: CompletionItemKind.Snippet,
		detail: "extend declaration",
		documentation: {
			kind: MarkupKind.Markdown,
			value: ['```hulo', "extension type name {\n\n}", '```'].join('\n')
		},
		insertText: "extend type name {\n\n}"
	},
	{
		label: 'extendtt',
		kind: CompletionItemKind.Snippet,
		detail: "extend declaration",
		documentation: {
			kind: MarkupKind.Markdown,
			value: ['```hulo', "extension trait name {\n\n}", '```'].join('\n')
		},
		insertText: "extend trait name {\n\n}"
	},
	{
		label: 'declare',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'comptime',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'defer',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'new',
		kind: CompletionItemKind.Keyword,
	},
	{
		label: 'delete',
		kind: CompletionItemKind.Keyword,
	},
]