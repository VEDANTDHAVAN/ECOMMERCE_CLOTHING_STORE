import psycopg2
from pathlib import Path

# Load SQL file
sql_file_path = "create_and_seed_products.sql"
sql = Path(sql_file_path).read_text()

# PostgreSQL connection credentials
conn = psycopg2.connect(
    host="localhost",
    port="5432",
    dbname="clothing_store",
    user="postgres",           # change this if your user is different
    password="TpUJ1rztMaZaRE3"   # change to your actual password
)

# Execute SQL
with conn:
    with conn.cursor() as cur:
        cur.execute(sql)

print("✅ 100 updated products successfully loaded into PostgreSQL.")
