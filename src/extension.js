const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	const provider1 = vscode.languages.registerCompletionItemProvider('vue', {

		provideCompletionItems(document, position, token, context) {

            // Getter list
            // TODO: Read them from store files
            const getter1 = new vscode.CompletionItem('\'projects/activeProject\'', vscode.CompletionItemKind.Text)
			getter1.insertText = 'activeProject: \'projects/activeProject\'';

            // Snippets
            const snippetCompletion = new vscode.CompletionItem('...mapGetters');
			snippetCompletion.kind = vscode.CompletionItemKind.Keyword;
			snippetCompletion.insertText = new vscode.SnippetString('...mapGetters({\r\t${1}\r}),');
            snippetCompletion.documentation = new vscode.MarkdownString("Inserts a mapGetters block");
            // TODO: Show only suggestions about getters
			snippetCompletion.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };

			// return all completion items as array
			return [
                getter1,
				snippetCompletion,
			];
		}
	});

	context.subscriptions.push(provider1);
}

exports.activate = activate;

module.exports = { activate }