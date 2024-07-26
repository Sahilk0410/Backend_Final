const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
            catch((err) => next(err)) // Forward the error to Express's error handling middleware
    }
}               // we use asyncHandler to wrap your asynchronous functions. 

// (`asyncHandler` is a utility function that wraps asynchronous route handlers or middleware in Express.js to automatically catch and handle errors, ensuring they are passed to Express’s error handling middleware.)

export { asyncHandler }








// const asyncHandler = () => {}
// const asyncHandler = (func) => {}
// const asyncHandler = (func) => {() => {}}
// const asyncHandler = (func) => async() => {}


// const asyncHandler = (func) => async (req, res, next) => {
//     try {
//         await func(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }