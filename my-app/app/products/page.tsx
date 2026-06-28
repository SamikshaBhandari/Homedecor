import { getAllProducts } from '../../services/productServices';

export default async function ProductsPage() {
    const products = await getAllProducts() as any[];

    return (
        <div className="min-h-screen bg-stone-50 py-12 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-stone-800 tracking-wide mb-2 text-center">
                    HomeDecor Aesthetic Hub
                </h1>
                <p className="text-stone-500 text-center mb-10">Curated Art, Planters & Cozy Modern Lights</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow">
                            <div className="h-64 bg-stone-200 flex items-center justify-center text-stone-400">
                                <span className="text-sm">Image View</span>
                            </div>
                            <div className="p-6">
                                <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">
                                    {product.category}
                                </span>
                                <h2 className="text-xl font-bold text-stone-800 mt-3 mb-2">{product.name}</h2>
                                <p className="text-stone-600 text-sm line-clamp-2 mb-4">{product.description}</p>
                                <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                                    <span className="text-lg font-bold text-stone-900">Rs. {product.price}</span>
                                    <button className="bg-stone-800 text-white text-sm px-4 py-2 rounded-lg hover:bg-stone-700 transition-colors">
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}