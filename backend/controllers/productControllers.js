import Product from "../models/product.js";

import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import APIFilters from "../utils/apiFilters.js";
import ErrorHandler from "../utils/errorHandler.js";

export const getProducts = catchAsyncErrors (async (req,res) => {
    const resPerPage=4;
    const apiFilters= new APIFilters(Product, req.query).search().filters();


     let products= await apiFilters.query;
     let filteredProductsCount= products.length;

    apiFilters.pagination(resPerPage);
    products= await apiFilters.query.clone();

    res.status (200).json({
        products,
        resPerPage,
        filteredProductsCount,
    });
});

//create new product =>  /api/v1/admin/products
export const newProduct = catchAsyncErrors (async(res,req) =>{

   req.body.user = req.user._id
    const product = await product.create(req.body);

    res.status(200).json({
            product,
    });
})
;
//create new product =>  /api/v1/admin/products/:id
export const getProductDetails = catchAsyncErrors(async(res,req, next) =>{
    const product = await product.findById(req?.params?.id);
        if (!product) {
           return next(new ErrorHandler("Product not found", 404));
        }
    res.status(200).json({
            product,
    });
});

//update product details =>  /api/v1/admin/products/:id
export const updateProduct = catchAsyncErrors (async(res,req) =>{
    let product = await product.findById(req?.params?.id);

        if (!product) {
            return next(new ErrorHandler("Product not found", 404));
        }

        product = await product.findByIdAndUpdate(req?.params?.id, req.body, {
            new: true,
        });
        
    res.status(200).json({
            product,
    });
});

//delete product  =>  /api/v1/admin/products/:id
export const deleteProduct = catchAsyncErrors (async(res,req) =>{
    const product = await product.findById(req?.params?.id);

        if (!product) {
            return next(new ErrorHandler("Product not found", 404));
        }

       await product.deleteOne();
       
    res.status(200).json({
            product,
    });
});
