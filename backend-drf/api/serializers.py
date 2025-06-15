from rest_framework import serializers

# Accepting input from frontend
class StockPredictionSerializer(serializers.Serializer):
    ticker = serializers.CharField(max_length=20)

    def validate_ticker(self, value):
        value = value.strip().upper()
        if not value:
            raise serializers.ValidationError("Ticker cannot be empty or blank.")
        return value
