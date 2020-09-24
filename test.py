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