import express from 'express'
import { isAuthenticatedUser } from '../middlewares/auth.js';
import { authorizeRoles } from '../middlewares/auth.js';
import { getProducts, 
   newProduct, 
   getProductDetails,
   updateProduct ,
   deleteProduct, 
   createProductReview, 
   getProductReviews,
   deleteReview}
      from '../controllers/productControllers.js';

const router = express.Router();

router.route("/products").get( getProducts);
router
   .route("/admin/products")
   .post(isAuthenticatedUser ,authorizeRoles("admin"),newProduct);

router.route("/products/:id").get(getProductDetails);

router
.route("/admin/products/:id")
.put(isAuthenticatedUser ,authorizeRoles("admin"),updateProduct);
router
.route("/admin/products/:id")
.delete(isAuthenticatedUser ,authorizeRoles("admin"),deleteProduct);

router
.route("/reviews")
.get(isAuthenticatedUser ,getProductReviews)
.put(isAuthenticatedUser ,createProductReview);

router
.route("/admin/reviews")
.delete(isAuthenticatedUser ,authorizeRoles("admin"),deleteReview);


export default router;