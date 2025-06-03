 Irrigation Cycle System

This is a **dynamic web application** built to manage and monitor irrigation cycles efficiently. It helps in scheduling, validating, and visualizing multiple irrigation cycles using time and plot-based filters.

A screenshot of the irrigation system app interface: 
![Screenshot (674)](https://github.com/user-attachments/assets/2b582cbc-b81f-431b-9c81-107a37c35136)



# Features and Functionalities

# 1. Input Validation and Error Alerts
Clear instructions are provided to help users enter valid inputs. In case of incorrect input, real-time error alerts are displayed to guide corrections.  
![Screenshot (675)](https://github.com/user-attachments/assets/fe2ce37d-76c4-4b6c-b0de-bbf25479a728)


# 2. Military Time Format (6 Digits)
- Time inputs must follow the **military standard format** (HHMMSS).
- The input must be **exactly 6 digits** — no more, no less. Otherwise error alert-
![Screenshot (652)](https://github.com/user-attachments/assets/47494f9f-677b-4c73-8228-89754fa26f9e)


# 3. Time Range Validation
- **Hours:** Must be between `00` and `23`
- **Minutes/Seconds:** Must be between `00` and `59`
Invalid inputs outside this range trigger error alerts.  
![Screenshot (654)](https://github.com/user-attachments/assets/9f02cbaa-0700-43c9-a68c-d73d76b9d73b)

# 4.  Time Logic Note - If Start Time Less Than End Time 
  If the **start time is earlier than the end time**, it implies that the irrigation cycle spans across **two different days**, and the total runtime will exceed **12 
  hours**. This is considered a long-duration irrigation schedule, so ensure this is intentional before submitting. It give alert.
   ![Screenshot (676)](https://github.com/user-attachments/assets/f3d6f2cf-c112-444c-ab84-77924ba085c2)

# 5. Time Logic Note -  Start time can not be less than Current time:
- Not allowed. The app shows an alert if the start time is in the past.
- ![Screenshot (656)](https://github.com/user-attachments/assets/3a9d52b2-8e54-4360-a16c-b0531cd2fb00)

# 6. ⏱ Runtime & Interval Time Constraints
- **Runtime** and **Interval** must **individually** and **combined** be < **1440 minutes** (i.e., 1 full day).
- Invalid durations will show alert messages.  
![Screenshot (659)](https://github.com/user-attachments/assets/3014720b-da93-48ad-b9fe-ffe90f9ed307)

# 7. Irrigation Cycle Table- Status Visibility
A detailed table shows irrigation cycle statuses such as:
- **Pending**
- **In Progress**
- **Complete**  
Each status is clearly marked and easily identifiable.  
![Screenshot (667)](https://github.com/user-attachments/assets/1dd90934-e445-48b4-9e96-553afd82911f)


# 8.  Filter by Status
You can filter cycles based on their current status for better tracking.  
![Screenshot (668)](https://github.com/user-attachments/assets/7913412b-e00a-4188-918b-10796d1dda78)
![Screenshot (669)](https://github.com/user-attachments/assets/f6f04ba1-4889-41eb-9d6f-1ccdf82cde99)
![Screenshot (670)](https://github.com/user-attachments/assets/27a5f1af-a60a-4a2a-81b5-e1f3452cc1bd)


# 9. 🌱 Filter by Plot Number
Irrigation cycles can also be filtered based on plot numbers.  
![Screenshot (671)](https://github.com/user-attachments/assets/01833d23-905b-449b-964e-2cf0be26b9fb)

# 10. 📈 Total Irrigated Plots
The total number of irrigated plots is always visible in the header for quick tracking.  
![Screenshot (673)](https://github.com/user-attachments/assets/d9bcf8af-37dd-47ac-804d-772e3a1089d0)


## 📦 Tech Stack

- HTML, CSS, JavaScript, React.js, material UI


## 🚀 Getting Started

1. Clone the repository  
   ```bash
   git clone https://github.com/your-username/your-repo.git

