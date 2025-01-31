

export const getProducts = async (req,res) => {
    res.status (200).json({
        message:"All Products",
    });
};

export const newProduct = async(res,req) =>{
    const product = await product.create(req.body);

    res.status(200).json({
            product,
    });
};