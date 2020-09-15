from selenium import webdriver
from selenium.webdriver.firefox.options import Options

import os

options = Options()
options.headless = True

with webdriver.Firefox(options=options) as browser:
    browser.get(f'file://{os.getcwd()}/index.html')
    assert('Live Code Example' in browser.page_source)

    assert('textarea' in browser.page_source)
