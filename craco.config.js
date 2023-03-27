import webpack from 'webpack';
const ASSET_PATH = process.env.ASSET_PATH || '/';
export default {
    output: {
        publicPath: ASSET_PATH,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
        }),
    ],
};