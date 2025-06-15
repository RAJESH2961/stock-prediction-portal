from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import StockPredictionSerializer

from rest_framework import status
from rest_framework.response import Response

import yfinance as yf
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from datetime import datetime

class StockPredictionAPIView(APIView):
    def post(self, request):
        serializer = StockPredictionSerializer(data=request.data)
        if serializer.is_valid():
            ticker = serializer.validated_data['ticker']
            
            # fetching data from yfinance
            now = datetime.now()
            start = datetime(now.year - 10, now.month, now.day)
            end = now

            try:
                df = yf.download(tickers=ticker, start=start, end=end)
                print(df)
                if df.empty:
                    return Response({'error': 'No data found for the given ticker.', 'status':status.HTTP_404_NOT_FOUND})

                # You can add your prediction logic here...

                return Response({'status': 'success', 'ticker': ticker})
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
