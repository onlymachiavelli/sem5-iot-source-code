import os
import openai
from langchain.chat_models import ChatOpenAI
from langchain.prompts.prompt import PromptTemplate
from dotenv import load_dotenv, find_dotenv
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory
from flask import Flask, jsonify, request
import joblib
import pandas as pd
from flask import Flask, request, jsonify

gnb=joblib.load('health.h5')
voter=joblib.load('heart.h5')

app = Flask(__name__)
import warnings 
warnings.filterwarnings('ignore')
_=load_dotenv(find_dotenv())
openai.api_key=os.environ['OPENAI_API_KEY']
chat=ChatOpenAI(temperature=0)
memory=ConversationBufferMemory()
template="""You are a very smart medical doctor named VegaBot. \
You are great at answering questions about medicine in a concise\
and easy to understand manners, not longer than 12 words.\
you never say that you are not a doctor, and always say something helpful.\
When you don't know the answer to a question you admit\
that you don't know. \
current conversation : \
{history}
Human : {input} \
AI assistant :"""
prompt=PromptTemplate(input_variables=['history','input'],template=template)
conversation=ConversationChain(prompt=prompt,llm=chat,memory=memory,verbose=False)
@app.route('/get_response', methods=['POST'])
def get_response():
    try:
        data = request.get_json()
        name = data['name']
        bday = data['bday']
        gender = data['gender']
        conditions = str(data['conditions'])
        allergies = str(data['allergies'])
        medications = str(data['medications'])
        blood = str(data['bloodType'])
        height = str(data['height'])
        weight = str(data['weight'])
        glycemia = str(data['glycemia'])
        #allergies, conditions, and medications 
        #print the whole reuest body 

        print(
            f"Name:{name}\nBDay:{bday}, Gender:{gender}"
            #f"Conditions:{conditions}\nAllergies:{allergies}\nMedications:{medications}"
            f"Blood Type:{blood}\nHeight:{height}\nWeight:{weight}\nGlycemia:{glycemia}"

        )
        memory.save_context({'input':f"my name is {name}. my birthday is {bday}. my gender is {gender}. my conditions are. my allergies are . my medications are  blood type is {blood} glycemia level is {glycemia} weight is {weight} and height is {height} and you can calculate the age since you receive the bday, my conditions are {conditions}, my medications are {medications} and my allergies are {allergies} "},{'output':'okay.'})
        user_input = data['user_input']
        print (user_input)
        bot_response = conversation.predict(input=user_input)
        response_data = {'response': bot_response}
        return jsonify(response_data)
    except Exception as e:
        error_msg = {'error': 'Invalid request data. Please provide a valid "user_input" field in the JSON data.'}
        print(e)
        return jsonify(error_msg), 400


@app.route('/health', methods=['POST'])
def health():
    try:
        data = request.json
        X_new=pd.DataFrame(data, index=[0])
        predictions = gnb.predict(X_new)
        return jsonify({'predictions': predictions.tolist()})
    except Exception as e:
        error_msg = {'error': 'Invalid request data. Please provide a valid "user_input" field in the JSON data.'}
        print(e)
        return jsonify(error_msg), 400
@app.route('/heart', methods=['POST'])
def heart():
    try:
        data = request.json
        X_new=pd.DataFrame(data, index=[0])
        predictions = voter.predict(X_new)
        return jsonify({'predictions': predictions.tolist()})
    except Exception as e:
        error_msg = {'error': 'Invalid request data. Please provide a valid "user_input" field in the JSON data.'}
        print(e)
        return jsonify(error_msg), 400

if __name__ == "__main__":
    app.run(host="0.0.0.0",port=5000)