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
    let initalCode = codeBlockContainer.innerHTML;
    initalCode = initalCode.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&')
    initalCode = decodeURIComponent(initalCode);
    codeBlockContainer.innerHTML = '';
    let codeBlock = getTextArea(idNum, initalCode);
    let outputWrapper = document.createElement('div');
    let targetWrapper = document.createElement('div');
    let output = document.createElement('span');
    let evelOutput = eval(initalCode);
    output.innerHTML = evelOutput;
    output.id = 'jsCodeBlock' + idNum + 'Output';
    let target = document.createElement('span');
    target.innerHTML = 'Target: ' + codeBlockContainer.getAttribute('data-target');
    target.id = 'jsCodeBlock' + idNum + 'Target';
    codeBlockContainer.appendChild(codeBlock);
    codeBlockContainer.appendChild(outputWrapper);
    outputWrapper.appendChild(output);
    codeBlockContainer.appendChild(targetWrapper);
    targetWrapper.appendChild(target);
}

function getTextArea(idNum, initalCode) {
    let textArea = document.createElement('textarea');
    textArea.innerHTML = initalCode;
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
    output.innerHTML = eval(event.target.value);
}

window.onload = main;