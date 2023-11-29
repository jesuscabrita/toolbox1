import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout.js';
import Index from './pages/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import File from './pages/File.js';
import { Provider } from 'react-redux';
import store from './redux/store.js';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchInterval: 60 * 60000,
            refetchIntervalInBackground: true,
        }
    }
});

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <Router>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Index />} />
                            <Route path="/file/:test" element={<File />} />
                        </Routes>
                    </Layout>
                </Router>
            </Provider>
        </QueryClientProvider>
    </React.StrictMode>
);