import yfinance as yf
import pandas as pd

class Utils:

    @staticmethod
    def get_stock_data(symbol):
        target = yf.Ticker(symbol)
        balance_sheet = target.balance_sheet
        df = pd.DataFrame(balance_sheet)

        # Define a function to format numbers in billions with commas
        def format_numbers(num):
            if pd.notna(num):
                return f'{num/1e9:.2f}'
            return num

        # Apply the formatting function to all numerical columns
        df = df.map(format_numbers)
        df = df.reset_index()
        df.columns.values[0] = 'Balance Sheet Item'
        date_columns = df.columns[1:]
        new_columns = [pd.to_datetime(col).strftime('%Y-%m-%d') for col in date_columns]
        df.columns = [df.columns[0]] + new_columns

        # Convert the DataFrame to JSON and return it
        json_data = df.to_json(orient='records')
        return json_data