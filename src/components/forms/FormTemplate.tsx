import { motion } from 'framer-motion';

const FormTemplate = ({
  children,
  className,
}: React.ComponentPropsWithRef<'div'>) => {
  return (
    <motion.div
      transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FormTemplate;
