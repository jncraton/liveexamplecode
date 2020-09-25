from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.by import By

import os

options = Options()
options.headless = True

with webdriver.Firefox(options=options) as browser:
    browser.get(f'file://{os.getcwd()}/index.html')
    assert('Live Code Example' in browser.page_source)

    assert('textarea' in browser.page_source)

    textarea = browser.find_elements_by_tag_name("textarea")[1]
    textarea.send_keys("Math.sin(1);")
    assert('0.8414709848078965' in browser.page_source)

with webdriver.Firefox(options=options) as browser:
    browser.get(f'file://{os.getcwd()}/index.html')
    # capture and display the expected output?(17)
    # target: 0 1 2 3 4 5
    assert ('Target: 0 1 2 3 4 5' in browser.page_source)

    # checks to see if its compareing the target and the current output(18)
    # ensures that at the run time the teacher code is already located inside the text box in a working manner
    assert ('Good' in browser.page_source)

    # look for the code the teacher writes in the _____ html
    assert ('for(let i = 0; i < 6; i++) {\n\tconsole.log(i);\n}' in browser.page_source)

with webdriver.Firefox(options=options) as browser:
    browser.get(f'file://{os.getcwd()}/index.html')
    #tests to make sure if the student fail their code that there is a bad option displayed
    textarea = browser.find_elements_by_tag_name("textarea")[1]
    textarea.send_keys("for(let i = 0; i < 5; i++) {\n\tconsole.log(i);\n}")
    assert ('Bad' in browser.page_source)

with webdriver.Firefox(options=options) as browser:
    browser.get(f'file://{os.getcwd()}/index.html')
    #ensures that if i have more than what is wanted aka (0 1 2 3 4 5 6) that a Bad is still shown
    textarea = browser.find_elements_by_tag_name("textarea")[1]
    textarea.send_keys("for(let i = 0; i < 7; i++) {\n\tconsole.log(i);\n}")
    assert ('Bad' in browser.page_source)

