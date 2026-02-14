def main():
    products = []

    for i in range(10):
        print(f"\nEntry {i+1}:")
        name = input("Enter product name: ")
        filament_type = input("Enter filament type: ")
        category = input("Enter category: ")

        products.append({
            "name": name,
            "filamentType": filament_type,
            "category": category
        })

    print("\n[")
    for item in products:
        print("  {")
        print(f"    name: '{item['name']}',")
        print(f"    filamentType: '{item['filamentType']}',")
        print(f"    category: '{item['category']}',")
        print("  },")
    print("];")


if __name__ == "__main__":
    main()
