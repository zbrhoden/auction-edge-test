const MOCK_LIST = [
  {
    "eventTypeCode": "completed",
    "eventTypeDesc": "Completed",
    "eventCategoryDesc": "Offer Accepted",
    "currentOfferAmount": 10300,
    "currentOfferAmountPrevious": 10300,
    "eventCreatedAt": "2020-11-24T17:09:18.758Z",
    "eventCreatedBy": "Vin Diesel",
    "eventNote": "buyer and seller agree",
    "ballControlCode": "buyer",
    "ballControlUser": "John Smith"
  },
  {
    "eventTypeCode": "offer_change",
    "eventTypeDesc": "Offer Modified",
    "eventCategoryDesc": "Counter By Seller",
    "currentOfferAmount": 10300,
    "currentOfferAmountPrevious": 10200,
    "eventCreatedAt": "2020-11-24T17:08:38.599Z",
    "eventCreatedBy": "Vin Diesel",
    "eventNote": "Final offer....",
    "ballControlCode": "buyer",
    "ballControlUser": "John Smith"
  },
  {
    "eventTypeCode": "offer_change",
    "eventTypeDesc": "Offer Modified",
    "eventCategoryDesc": "Counter By Buyer",
    "currentOfferAmount": 10200,
    "currentOfferAmountPrevious": 11000,
    "eventCreatedAt": "2020-11-24T17:08:07.530Z",
    "eventCreatedBy": "Vin Diesel",
    "eventNote": "not worth that much",
    "ballControlCode": "seller",
    "ballControlUser": "Mary Sue"
  },
  {
    "eventTypeCode": "offer_change",
    "eventTypeDesc": "Offer Modified",
    "eventCategoryDesc": "Counter By Seller",
    "currentOfferAmount": 11000,
    "currentOfferAmountPrevious": 10000,
    "eventCreatedAt": "2020-11-24T17:07:37.183Z",
    "eventCreatedBy": "Vin Diesel",
    "eventNote": "wants more money",
    "ballControlCode": "buyer",
    "ballControlUser": "John Smith"
  },
  {
    "eventTypeCode": "start",
    "eventTypeDesc": "Started",
    "eventCategoryDesc": "System Action",
    "currentOfferAmount": 10000,
    "currentOfferAmountPrevious": 10000,
    "eventCreatedAt": "2020-11-24T17:06:32.559Z",
    "eventCreatedBy": "ADMIN ADMIN",
    "eventNote": null,
    "ballControlCode": "missing",
    "ballControlUser": "John Smith"
  }
]

export default MOCK_LIST