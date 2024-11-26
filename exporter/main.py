import random
import requests
from datetime import datetime, timezone
import time


FIREBASE_DATABASE_URL = "https://essths-project-default-rtdb.europe-west1.firebasedatabase.app"


def generate_health_data():
    return {
        "Id": 1,  
        "Location": {
            "x": round(random.uniform(-180.0, 180.0), 6),
            "y": round(random.uniform(-90.0, 90.0), 6),
            "steps": random.randint(0, 10000),
            "time": datetime.now(timezone.utc).isoformat(),
        },
        "Oxygen": {
            "mm": round(random.uniform(90, 100), 1),
            "time": datetime.now(timezone.utc).isoformat(),
        },
        "Temperature": {
            "degree": round(random.uniform(36.0, 37.5), 1),
            "time": datetime.now(timezone.utc).isoformat(),
        },
        "HeartRate": {
            "bpm": random.randint(60, 100),
            "time": datetime.now(timezone.utc).isoformat(),
        },
    }


def send_health_data(api_url, payload):
    try:
        headers = {"Content-Type": "application/json"}
        response = requests.post(api_url, json=payload, headers=headers)
        response.raise_for_status()
        print(f"Data sent successfully: {response.json()}")
        return True
    except requests.exceptions.RequestException as e:
        print(f"Failed to send data: {e}")
        return False


def trigger_firebase_rtdb(user_id, message):
    try:
        firebase_url = f"{FIREBASE_DATABASE_URL}/notifications/{user_id}.json"
        payload = {
            "message": message,
            "timestamp": datetime.now(timezone.utc).isoformat(),
        }
        response = requests.post(firebase_url, json=payload)
        response.raise_for_status()
        print(f"Firebase RTDB triggered for user {user_id}.")
    except requests.exceptions.RequestException as e:
        print(f"Failed to update Firebase RTDB: {e}")


if __name__ == "__main__":
    API_URL = "http://localhost:3000/users/saveHealthData" 

    while True:
        payload = generate_health_data()
        print("Generated payload:", payload)

        if send_health_data(API_URL, payload):
            trigger_firebase_rtdb(payload["Id"], "Health data successfully updated.")

        time.sleep(5)
