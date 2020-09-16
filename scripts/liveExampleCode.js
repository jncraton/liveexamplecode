'use strict'
function main() {
    initCodeBlocks();       
}

function findCodeBlocks() {
    return document.getElementsByClassName('live-js-code');
}

function initCodeBlocks() {
    let codeBlockContainers = findCodeBlocks();
    for (let i = 0; i < codeBlockContainers.length; i++) {
        createCodeBlocks(codeBlockContainers[i], i);
    }
}

function createCodeBlocks(codeBlockContainer, idNum) {
    let codeBlock = getTextArea(idNum);
    let outputWrapper = document.createElement('pre');
    let output = document.createElement('span');
    output.id = 'jsCodeBlock' + idNum + 'Output';
    codeBlockContainer.appendChild(codeBlock);
    codeBlockContainer.appendChild(outputWrapper);
    outputWrapper.appendChild(output);
}

function getTextArea(idNum) {
    let textArea = document.createElement('textarea');
    textArea.className = 'js-code';
    textArea.id = 'jsCodeBlock' + idNum;
    textArea.name = 'jsCodeBlock' + idNum;
    textArea.placeholder = 'Enter your code here';
    textArea.addEventListener('input', executeCode);

    return textArea;
}

function executeCode(event) {
    let outputId = event.target.id + 'Output';
    let output = document.getElementById(outputId);
    output.innerHTML = event.target.value;
}

window.onload = main;