import { useMDXComponent } from 'next-contentlayer/hooks'
import { MDXComponents } from 'mdx/types';

const components: MDXComponents = {}

type MDXProps = {
  code: string
}

export default function Mdx({ code }: MDXProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}