"use client"

import { useEffect, useRef } from 'react'

interface MermaidDiagramProps {
  chart: string
  id?: string
}

export default function MermaidDiagram({ chart, id = 'mermaid-diagram' }: MermaidDiagramProps) {
  const diagramRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadAndRender = async () => {
      try {
        const mermaid = (await import('mermaid')).default;
        
        mermaid.initialize({
          startOnLoad: false,
          theme: 'dark',
          themeVariables: {
            primaryColor: '#dc2626',
            primaryTextColor: '#fef2f2',
            primaryBorderColor: '#ef4444',
            lineColor: '#ef4444',
            secondaryColor: '#1f2937',
            tertiaryColor: '#991b1b',
            background: 'transparent',
            mainBkg: '#1a0000',
            secondBkg: '#2d0000',
            tertiaryBkg: '#3d0000',
            fontFamily: 'ui-monospace, SFMono-Regular, monospace',
            fontSize: '14px',
          },
          flowchart: {
            htmlLabels: false,
            curve: 'basis',
            nodeSpacing: 50,
            rankSpacing: 80,
          },
          securityLevel: 'loose'
        });

        if (diagramRef.current) {
          diagramRef.current.innerHTML = '';
          const { svg } = await mermaid.render(id, chart);
          diagramRef.current.innerHTML = svg;
        }
      } catch (error) {
        console.error('Error rendering mermaid diagram:', error);
        if (diagramRef.current) {
          diagramRef.current.innerHTML = '<p class="text-red-400 text-center">Error loading diagram</p>';
        }
      }
    };

    loadAndRender();
  }, [chart, id])

  return (
    <div 
      ref={diagramRef} 
      id={id}
      className="w-full flex justify-center items-center min-h-[300px] text-red-300"
    />
  )
}
