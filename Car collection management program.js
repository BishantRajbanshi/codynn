list = ['BMW','Ferari','Bugatti','McLaren','Lamborgini','FordGT']
print('Welcome to your car collection management software!')
exit=input('Enter any key to start or press "Q" to exit : ').lower()
while exit !="q":
    print('Here are the things you can do here: ')
    print(' 1. Insert a car to your collection\n 2. Replace a car with another from its position\n 3. Remove a car from the collection\n 4. To sort out all the cars\n 5. To show the collection')
    choice=int(input('Enter your choice:'))
    #checking weather your input is valid or not!!
    while choice<1 and choice>6:
        print('Your have entered invalid value!')
        choice=int(input('Enter your choice:'))
    if choice == 1:
        new_car=str(input('Enter the name of the car: '))
        list.append(new_car)
        print('Here are your cars: ',list)
    elif choice ==2:
        replace=int(input(('Enter the place you want to replace your car with: ')))
        replace = replace-1
        new_car=str(input('Enter the name of the car: '))
        list[replace]=new_car
        print('Here are your cars: ',list)
    elif choice ==3:
        which=int(input('Enter the position of the car you want to remove: '))
        which=which-1
        list.pop(which)
        print('Here are your cars: ',list)
    elif choice==4:
        list.sort()
        print('Here are your cars: ',list)
    else:
        print('Here are your cars: ',list)
print('Thank you!!')

