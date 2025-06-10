import { motion } from "framer-motion";

const FunnelAnimation = () => {
  return (
    <div className="w-full max-w-3xl mx-auto mt-20 mb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col items-center gap-2"
      >
        {/* Top block */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-2xl"
        />
        {/* Middle block */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80%" }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="h-20 bg-gradient-to-r from-purple-600 to-fuchsia-600"
        />
        {/* Bottom block */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "60%" }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="h-16 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-b-2xl"
        />
      </motion.div>
    </div>
  );
};

export default FunnelAnimation; 