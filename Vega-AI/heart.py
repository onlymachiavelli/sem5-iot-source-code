import pandas as pd
from sklearn.model_selection import cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.naive_bayes import GaussianNB
from xgboost import XGBClassifier
from sklearn.ensemble import VotingClassifier
from sklearn.linear_model import LogisticRegression
import joblib
data=pd.read_csv('heart.csv')
data['output']=data['output'].replace({0:'less chance of heart attack',1:'more chance of a heart attack'})
X=data[['sex','age','trtbps','fbs','thalachh']]
X.rename(columns={'sex':'gender','trtbps':'systole','fbs':'bloodsugar','thalachh':'heartrate'},inplace=True)
y=data['output']
scaler=StandardScaler()
scaler.fit_transform(X)
m1=LogisticRegression(solver='liblinear',penalty='l1',C=0.1)
m2=GaussianNB()
m3=XGBClassifier(n_estimators=600,learning_rate=0.05)
voter=VotingClassifier(estimators=[('log',m1),('gnb',m2),('xgb',m3)],voting='hard')
voter.fit(X,y)
file='heart.h5'
joblib.dump(voter,file)
