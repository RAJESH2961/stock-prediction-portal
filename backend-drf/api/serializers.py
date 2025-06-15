from rest_framework import serializers

# accepting input from frontend
class StockPredictionSerializer(serializers.Serializer):
    ticker = serializers.CharField(max_length=20)