'use strict'
function main() {
    let scriptTags = findCodeBlocks();
    let codeBlock = createCodeBlock();
    codeBlock.addEventListener('input', executeCode); // TODO: Fix this
    insertAfter(codeBlock, scriptTags[scriptTags.length - 1]);
}

function findCodeBlocks() {
    return document.getElementsByClassName('codeBlockScripts');
}

function createCodeBlock() {
    let codeBlock = document.createElement('textarea');
    codeBlock.id = 'codeBlock';
    codeBlock.name = 'codeBlock';
    codeBlock.rows = '10';
    codeBlock.cols = '80';
    codeBlock.placeholder = 'Enter your code here';
    return codeBlock;
}

function executeCode(event) {
    let output = document.getElementsByClassName('live-js-output');
    output[0].innerHTML = event.target.value;
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

main();
