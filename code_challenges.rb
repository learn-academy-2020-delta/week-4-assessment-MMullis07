# ASSESSMENT 4: Ruby Coding Practical Questions

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.

fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]
def odds_sorted (array)
    array_odds = []
    i = array.length
    while i > 0 do
        i = i - 1
        if array[i].is_a? Numeric and array[i].odd? 
            array_odds << array[i]
        end
    end
    array_odds.sort
end

# p odds_sorted(fullArr1)




# --------------------2) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data from the bike object.
class Bike
    def initialize (model, wheels, frame)
        @model = model
        @wheels = 2
        @frame = frame
        @speed = 0
    end

    def get_info
        "The #{@model} bike has #{@wheels} wheels and a #{@frame}cm frame"
    end

# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'
my_bike = Bike.new("Trek", 2, 168)
puts my_bike.get_info

# -------------------3) Add a bell to the bike class and create a method that will ring the bell when the method is called.
    def set_bell
        @bell = bell
    end

    def ring_bell
        'Beep beep!'
    end
# Expected output example: my_bike.ring_bell => 'Beep beep!'
puts my_bike.ring_bell

# -------------------4) Add a speedometer to the Bike class. The speed should be initialized at 0.
    def speed
        @speed
    end
    # Expected output example: my_bike.speed => 0
    puts "The speed of this bike is #{my_bike.speed} mph"

# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.
    def pedal_faster num
        @speed += num
    end
# Expected output example: my_bike.pedal_faster 10 => 10
    my_bike.pedal_faster 10
    puts "The current speed has accelerated #{my_bike.speed}"

    def brake num
        @speed -= num
        if @speed < 0
            @speed = 0
        end
    end
# Expected output example: my_bike.brake 15 => 0
    my_bike.brake 15
    puts "The current speed has slowed down to #{my_bike.speed}"
end