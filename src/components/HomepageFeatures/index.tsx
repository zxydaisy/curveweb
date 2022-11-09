import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  keyIndex: number;
};

const FeatureList: FeatureItem[] = [
  {
    title: '分布式存储系统',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    keyIndex: 0,
    description: (
      <>
        CURVE 是网易开源的高性能、高可用、高可靠分布式存储系统，具有非常良好的扩展性。基于该存储底座可以打造适用于不同应用场景的存储系统，如块存储、对象存储、云原生数据库等。CURVE 的设计开发始终围绕三个理念：一是顺应当前存储硬件设施发展趋势，做到软硬件结合打造顶级的存储产品；二是秉持 “Simple Can be harder than complex”，了解问题本质情况下选择最简单的方案解决问题；三是拥抱开源，在充分调研的前提下使用优秀的开源项目组件，避免造轮子。
      </>
    ),
  },
  {
    title: ' 高性能',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    keyIndex: 1,
    description: (
      <>
        高性能是 CURVE 的一大特点，也是项目团队创建 CURVE 项目的初衷。RPC 层面 CURVE 采用了高性能和低延迟并且已开源的 brpc；在一致性层面选择了基于 quorum 机制并且开源的 braft，从协议层面来说 quorum 机制在延迟方面天生优于多副本强一致的方式。实现上 CURVE 对 braft 快照的实现进行了优化，在状态机的实现上采用 chunkfilepool 的方式 (初始化集群的时候格式化出指定比例的空间用作 chunk) 使得底层的写入放大为 0；此外 CURVE 还在 chunk 上进行更细力度的地址空间 hash 以达到读写分离、减小 IO 碰撞等的效果，从而进一步提升 IO 性能。
      </>
    ),
  },
  {
    title: '高可用',
    keyIndex: 2,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       高可用是 CURVE 的另一大特点。MDS、ChunkServer 以及 SnapShotCloneServer 都支持多实例部署，部分实例异常不影响整个集群的可用性。
      </>
    ),
  },
];

function Feature({ keyIndex, title, Svg, description}: FeatureItem) {
  const result = (keyIndex % 2 === 1);
  if (result) {
  return (
    <div className={clsx('row')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className={clsx("text--left", styles.context)}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
  } else {
   return (<div className={clsx('row')}>
      <div className={clsx("text--right", styles.context)}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
    </div>);
  }
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="col">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} keyIndex={idx} {...props}  />
          ))}
        </div>
      </div>
    </section>
  );
}
