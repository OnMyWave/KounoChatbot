# Importing Libraries

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import os 
import pandas as pd
import time
import warnings

warnings.simplefilter(action='ignore', category=FutureWarning)

# Chrome Setting
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(options=options, service=Service(ChromeDriverManager().install()))
QT_XPATH = '//*[@id="content"]/div[1]/div/div[1]/div[2]/div/div'
QC_XPATH = '//*[@id="content"]/div[1]/div/div[1]/div[3]'
# URL
URL = 'https://kin.naver.com/tag/tagDetail.naver?tag=%EC%95%84%EB%91%90%EC%9D%B4%EB%85%B8&listType=answer&page='

def entering_page(page_idx, article_idx):
    driver.get(URL + str(page_idx))
    driver.find_element(By.XPATH, '//*[@id="content"]/div/div[3]/div[3]/ul/li['+ str(article_idx + 1) + ']/div[2]/a').click()

def crawling(df): # dataframe, i 번째 페이지
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, 'title'))
    )
    
    question_title = driver.find_element(By.CLASS_NAME, 'title').text
    try:
        question_content = driver.find_element(By.XPATH, QC_XPATH).text
    except:
        question_content = ''
    answers = driver.find_elements(By.CLASS_NAME, 'se-text-paragraph')
    answer_content = ''.join([answer.text for answer in answers])

    driver.back()
    data = {
        'qt_title' : question_title,
        'qt_content' : question_content,
        'ans_content' : answer_content
    }
    df = df.append(data, ignore_index = True)
    return df
    

if __name__ == "__main__":
    df = pd.DataFrame(columns = [
        'qt_title', 'qt_content', 'ans_content'
    ])
    try:
        for page in range(100): # 100페이지 넘어가면 네이버 Q&A 데이터베이스에 오류가 있어 중복 현상이 생김
            for article in range(10):
                print(f'Naver Arduino Q&A {page+1}페이지 {article+1} 번째 게시글 크롤링 중입니다.')
                entering_page(page+1,article)
                df = crawling(df)
    finally:
        df.to_csv('arduino_naver_qa.csv', encoding='utf-8-sig')