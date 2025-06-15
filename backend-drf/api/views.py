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
import os
from django.conf import settings

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

                # prediction logic here...

                # reset index
                df = df.reset_index()
                # print(df)
                # Generating a Basic plot

                # MAtplot lib have 2 types of background 1.Interactive, NON-interactive
                plt.switch_backend('AGG') # Antigrane goementry to sve plots in image files
                plt.figure(figsize=(12,5))
                plt.plot(df.Close, label='Closing price')
                plt.title(f'Closing price of {ticker}')
                plt.xlabel('Days')
                plt.ylabel('Close Price')
                plt.legend()
                # saving the plots to a file in media directory
                plot_img_path = f'{ticker}_plot.png'
                image_path = os.path.join(settings.MEDIA_ROOT, plot_img_path)
                plt.savefig(image_path)
                plt.close()
                plot_img = settings.MEDIA_URL + plot_img_path
                print(plot_img)


                return Response({'status': 'success',
                                 'plot_img':plot_img, 
                                 })
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
