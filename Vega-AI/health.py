import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import accuracy_score
from sklearn.model_selection import cross_val_score
from sklearn.preprocessing import StandardScaler
import joblib
data_path="TERBARU (1).csv"
data=pd.read_csv(data_path)
data['Class']=data['Class'].replace({True:'healthy',False:'not healthy'})
data.drop(columns=['Unnamed: 18', 'Unnamed: 19', 'Unnamed: 20'],inplace=True)
data.head()
features=['Temperature', 'Systole','Diastole', 'HeartRate', 'Spo2']
X=data[features]
y=data['Class']
scaler=StandardScaler()
scaler.fit(X)
X_train,X_valid,y_train,y_valid=train_test_split(X,y,train_size=0.8,random_state=0)
model=GaussianNB()
model.fit(X,y)
file= 'health.h5'
joblib.dump(model,file)

