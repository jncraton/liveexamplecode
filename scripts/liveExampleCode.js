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
    initalCode = initalCode.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
    initalCode = decodeURIComponent(initalCode);
    codeBlockContainer.innerHTML = '';
    let codeBlock = getTextArea(idNum, initalCode);
    let outputWrapper = document.createElement('div');
    let targetWrapper = document.createElement('div');
    let statusWrapper = document.createElement('div');
    let output = document.createElement('span');
    let target = document.createElement('span');
    let status = document.createElement('span');
    output.id = 'jsCodeBlock' + idNum + 'Output';
    status.id = 'jsCodeBlock' + idNum + 'Status';
    target.id = 'jsCodeBlock' + idNum + 'Target';
    target.innerHTML = 'Target: ' + codeBlockContainer.getAttribute('data-target');
    target.id = 'jsCodeBlock' + idNum + 'Target';
    codeBlockContainer.appendChild(codeBlock);
    codeBlockContainer.appendChild(outputWrapper);
    outputWrapper.appendChild(output);
    codeBlockContainer.appendChild(targetWrapper);
    targetWrapper.appendChild(target);
    codeBlockContainer.appendChild(statusWrapper);
    statusWrapper.appendChild(status);
    executeCode(output, status, target, initalCode);
}

function getTextArea(idNum, initalCode) {
    let textArea = document.createElement('textarea');
    textArea.innerHTML = initalCode;
    textArea.className = 'js-code';
    textArea.id = 'jsCodeBlock' + idNum;
    textArea.name = 'jsCodeBlock' + idNum;
    textArea.placeholder = 'Enter your code here';
    textArea.addEventListener('input', executeCodeEvent); 

    return textArea;
}

function executeCodeEvent(event) {
    let outputId = event.target.id + 'Output';
    let output = document.getElementById(outputId);
    let statusId = event.target.id + 'Status';
    let status = document.getElementById(statusId);
    let targetId = event.target.id + 'Target';
    let target = document.getElementById(targetId);
    let code = event.target.value;
    executeCode(output, status, target, code);
}

function executeCode(output, status, target, code) {
    if (code === '') {
        output.innerHTML = 'No code found...';
        status.innerHTML = '';
        return;
    }
    try {
        let arr = [];
        console.log = (msg) => { arr.push(msg) };

        let targetCode = target.innerHTML.replace('Target: ','');
        let evalOutput = eval(code);
        let consoleOutput = arr.join(' ');
        
        if(consoleOutput != '') {
            output.innerHTML = consoleOutput;
            if (targetCode === consoleOutput) {
                status.innerHTML = 'Good';
            }
            else {
                status.innerHTML = 'Bad';
            }
        }
        else {
            output.innerHTML = evalOutput;
            if (targetCode === evalOutput) {
                status.innerHTML = 'Good';
            }
            else {
                status.innerHTML = 'Bad';
            }
        }      
    }
    catch(e) {
        output.innerHTML = e;
        status.innerHTML = 'Bad';
    }
}


window.onload = main;