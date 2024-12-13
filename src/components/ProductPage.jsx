import { useState } from "react";
import imgPurple from "../assets/img1.png"; // Add actual image path
import imgBlue from "../assets/img2.png"; // Replace with the actual blue image path
import imgGreen from "../assets/img3.png"; // Replace with the actual green image path

const ProductPage = () => {
    const [selectedColor, setSelectedColor] = useState("purple");
    const [selectedSize, setSelectedSize] = useState({ size: "M", price: 79 });
    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const bandColors = [
        { color: "purple", code: "#816BFF" },
        { color: "blue", code: "#1FCEC9" },
        { color: "green", code: "#3B4747" },
    ];

    const sizes = [
        { size: "S", price: 79 },
        { size: "M", price: 89 },
        { size: "L", price: 95 },
        { size: "XL", price: 99 },
    ];

    // Map colors to images
    const images = {
        purple: imgPurple,
        blue: imgBlue,
        green: imgGreen,
    };

    const addToCart = () => {
        const item = {
            id: Date.now(),
            color: selectedColor,
            size: selectedSize.size,
            price: selectedSize.price,
            quantity,
        };
        setCart([...cart, item]);
    };

    const toggleCartModal = () => setShowCart(!showCart);

    const adjustQuantity = (amount) => {
        setQuantity((prev) => Math.max(1, prev + amount)); // Prevents quantity from being less than 1
    };

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="p-8 container mx-auto h-screen  flex items-center justify-center">
            {/* Product Section */}
            <div className="flex gap-8">
                {/* Thumbnail */}
                <div>
                    <img
                        src={images[selectedColor]} // Dynamically display the image
                        alt={`${selectedColor} Smart Watch`}
                        className="w-96"
                    />
                </div>

                {/* Details */}
                <div className="flex flex-col gap-4 max-w-2xl">
                    <h1 className="text-[40px] font-bold text-[#364A63]">Classy Modern Smart Watch</h1>
                    <div className="  text-gray-400 text-2xl"><span className="line-through text-xl">$99.00  </span>  <span className="text-xl font-bold text-[#6576FF]">
                        ${(selectedSize.price * quantity).toFixed(2)}
                    </span></div>
                  
                    <p className="text-[#8091A7] text-lg">
                    I must explain to you how all this mistaken idea of denoun cing ple praising pain was born and I will give you a complete account of the system, and expound the actual teaching.
                    </p>

                    {/* Band Colors */}
                    <div className="mt-4">
                        <p className="font-semibold">Band Color:</p>
                        <div className="flex gap-2 mt-2">
                            {bandColors.map(({ color, code }) => (
                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? "border-[#6576FF]" : "border-gray-300"
                                        }`}
                                    style={{ backgroundColor: code }}
                                />
                            ))}

                        </div>
                    </div>

                    {/* Wrist Sizes */}
                    <div className="mt-4">
                        <p className="font-bold text-lg text-[#364A63]">Wrist Size:</p>
                        <div className="flex gap-2 mt-2">
                            {sizes.map((size) => (
                                <button
                                    key={size.size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-4 py-2 border rounded ${selectedSize.size === size.size
                                        ? "border-[#6576FF] "
                                        : "border-gray-300"
                                        }`}
                                >
                                    <spna className="font-bold">{`${size.size}`}</spna>
                                    <span className="text-[#8091A7]"> {`$${size.price}`}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity & Favorite */}
                    <div className="flex items-center gap-4 mt-4">
                        {/* Quantity Controls */}
                        <div className="grid grid-cols-3 gap-2 border border-[#DBDFEA] rounded h-[38px]">
                            <button
                                onClick={() => adjustQuantity(-1)}
                                className="px-3 py-1 border-r-2 border-[#DBDFEA]"
                            >
                                <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.1607 1.675H1.03926C0.825977 1.675 0.642318 1.60391 0.488281 1.46172C0.346094 1.30768 0.275 1.12402 0.275 0.910742C0.275 0.70931 0.346094 0.5375 0.488281 0.395312C0.642318 0.241276 0.825977 0.164257 1.03926 0.164257H13.1607C13.374 0.164257 13.5518 0.241276 13.6939 0.395312C13.848 0.5375 13.925 0.70931 13.925 0.910742C13.925 1.12402 13.848 1.30768 13.6939 1.46172C13.5518 1.60391 13.374 1.675 13.1607 1.675Z" fill="#8091A7" />
                                </svg>

                            </button>
                            <button>
                                <span className="text-lg font-semibold ">{quantity}</span>
                            </button>
                            <button
                                onClick={() => adjustQuantity(1)}
                                className="px-3 py-1 border-l-2 border-[#DBDFEA] "
                            >
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.1607 6.16426C13.374 6.16426 13.5518 6.24128 13.6939 6.39531C13.848 6.5375 13.925 6.70931 13.925 6.91074C13.925 7.12402 13.848 7.30768 13.6939 7.46172C13.5518 7.60391 13.374 7.675 13.1607 7.675H7.86426V12.9893C7.86426 13.1907 7.78724 13.3684 7.6332 13.5225C7.49102 13.6646 7.31328 13.7357 7.1 13.7357C6.88672 13.7357 6.70306 13.6646 6.54902 13.5225C6.40684 13.3684 6.33574 13.1907 6.33574 12.9893V7.675H1.03926C0.825977 7.675 0.642318 7.60391 0.488281 7.46172C0.346094 7.30768 0.275 7.12402 0.275 6.91074C0.275 6.70931 0.346094 6.5375 0.488281 6.39531C0.642318 6.24128 0.825977 6.16426 1.03926 6.16426H6.33574V0.849999C6.33574 0.636718 6.40684 0.458984 6.54902 0.316796C6.70306 0.16276 6.88672 0.0857416 7.1 0.0857416C7.31328 0.0857416 7.49102 0.16276 7.6332 0.316796C7.78724 0.458984 7.86426 0.636718 7.86426 0.849999V6.16426H13.1607Z" fill="#8091A7" />
                                </svg>

                            </button>
                        </div>
                        {/* Add to Cart */}
                        <button
                            onClick={addToCart}
                            className=" px-6 py-2 bg-[#6576FF] text-white rounded "
                        >
                            Add to Cart
                        </button>

                        {/* Favorite Icon */}
                        <button
                            onClick={toggleFavorite}
                            className={`text-xl ${isFavorite ? "text-red-500" : "text-gray-400"
                                }`}
                        >
                            <svg width="30" height="31" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 18.3729C10.391 18.3729 10.2881 18.3547 10.1912 18.3184C10.1064 18.2699 10.0277 18.2154 9.95508 18.1549L3.39785 11.5977C2.96191 11.1496 2.6168 10.635 2.3625 10.0537C2.1082 9.46035 1.98105 8.83066 1.98105 8.16465C1.98105 7.48652 2.1082 6.85684 2.3625 6.27559C2.6168 5.68223 2.96191 5.16758 3.39785 4.73164C3.83379 4.28359 4.34844 3.93242 4.9418 3.67812C5.53516 3.42383 6.16484 3.29668 6.83086 3.29668C7.49687 3.29668 8.12656 3.42383 8.71992 3.67812C9.31328 3.93242 9.82793 4.28359 10.2639 4.73164L10.5 4.96777L10.7361 4.71348C11.1721 4.27754 11.6807 3.93242 12.2619 3.67812C12.8553 3.42383 13.485 3.29668 14.151 3.29668C14.1631 3.29668 14.1691 3.29668 14.1691 3.29668C14.1813 3.29668 14.1873 3.29668 14.1873 3.29668C14.8533 3.29668 15.477 3.42383 16.0582 3.67812C16.6516 3.93242 17.1662 4.28359 17.6021 4.73164C18.0381 5.16758 18.3832 5.68223 18.6375 6.27559C18.8918 6.85684 19.0189 7.48652 19.0189 8.16465C19.0189 8.83066 18.8918 9.46035 18.6375 10.0537C18.3832 10.635 18.0381 11.1496 17.6021 11.5977L11.0449 18.1549C10.9723 18.2154 10.8875 18.2699 10.7906 18.3184C10.7059 18.3547 10.609 18.3729 10.5 18.3729ZM6.83086 4.85879C5.92266 4.85879 5.1416 5.17969 4.4877 5.82148C3.8459 6.46328 3.525 7.24434 3.525 8.16465C3.525 8.6127 3.60977 9.04258 3.7793 9.4543C3.96094 9.85391 4.19707 10.199 4.4877 10.4896L10.5 16.502L16.5123 10.4896C16.8029 10.199 17.033 9.85391 17.2025 9.4543C17.3842 9.04258 17.475 8.6127 17.475 8.16465C17.475 7.70449 17.3842 7.27461 17.2025 6.875C17.033 6.47539 16.8029 6.12422 16.5123 5.82148C16.2096 5.51875 15.8584 5.28262 15.4588 5.11309C15.0592 4.94355 14.6354 4.85879 14.1873 4.85879C14.1752 4.85879 14.1691 4.85879 14.1691 4.85879C13.709 4.85879 13.2791 4.94355 12.8795 5.11309C12.4799 5.28262 12.1348 5.51875 11.8441 5.82148H11.826L11.0449 6.60254C10.9723 6.6752 10.8875 6.73574 10.7906 6.78418C10.7059 6.82051 10.609 6.83867 10.5 6.83867C10.391 6.83867 10.2881 6.82051 10.1912 6.78418C10.1064 6.73574 10.0277 6.6752 9.95508 6.60254L9.17402 5.82148C8.87129 5.51875 8.52012 5.28262 8.12051 5.11309C7.7209 4.94355 7.29102 4.85879 6.83086 4.85879Z" fill={isFavorite ? "#6576FF" : "#DBDFEA"} />
                            </svg>

                        </button>
                    </div>
                      {/* Floating Cart Button */}
            {cart.length > 0 && (
                <button
                    onClick={toggleCartModal}
                    className="fixed bottom-12  px-6 py-2 bg-[#FFBB5A] text-[#364A63] rounded shadow-lg font-semibold"
                >
                    Checkout <span className="bg-white px-[8px] py-[4px] ml-2 rounded-lg text-sm">{cart.length}</span>
                </button>
            )}


                </div>
            </div>

          

            {/* Cart Modal */}
            {showCart && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded shadow-lg max-w-2xl w-full">
                        <h2 className="text-xl font-bold text-[#364A63]">Your Cart</h2>
                        <div className="mt-4">
                            <div>
                            <div className="flex items-center justify-around text-[#8091A7] text-sm">
                                        <p>{`item`}</p>
                                        <p>{`Color`}</p>
                                        <p>{`Size`}</p>
                                        <p>{`Qty`}</p>
                                        <p>{`Total`}</p>
                                    </div>
                            </div>
                            {cart.map((item) => (
                                <div key={item.id} className="flex justify-between items-center p-2 border-b">
                                    <img
                                        src={images[item.color]}
                                        alt={`${item.color} Watch`}
                                        className="w-16"
                                    />


                                    <div className="flex items-center justify-around  w-full" >
                                        <p>{` ${item.color}`}</p>
                                        <p>{`${item.size} $${item.price}`}</p>
                                        <p>{` ${item.quantity}`}</p>
                                        <p>{`$${(item.price * item.quantity).toFixed(2)}`}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                       <div className="flex items-center justify-end space-x-4">
                       <button
                            onClick={toggleCartModal}
                            className="mt-4 px-6 py-2 border border-[#DBDFEA] text-[#364A63] rounded "
                        >
                            Continue Shopping
                        </button>
                        <button
                            onClick={toggleCartModal}
                            className="mt-4 px-6 py-2 bg-[#6576FF] text-[#FFFFFF] rounded "
                        >
                            Checkout
                        </button>
                       </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductPage;
