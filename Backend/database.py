import mysql.connector

try:
    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="yourpassword",  # अपना सही पासवर्ड डालें
        database="milksources"
    )

    if conn.is_connected():
        print("✅ MySQL Database Connected Successfully!")
    else:
        print("❌ Connection Failed!")

except mysql.connector.Error as err:
    print(f"Error: {err}")

finally:
    if 'conn' in locals() and conn.is_connected():
        conn.close()
        print("🔌 MySQL Connection Closed")
