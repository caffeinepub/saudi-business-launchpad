import { FileText, Download } from 'lucide-react';

interface Resource {
  title: string;
  description: string;
  type?: string;
}

interface ResourceListProps {
  resources: Resource[];
}

export default function ResourceList({ resources }: ResourceListProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {resources.map((resource, index) => (
        <div
          key={index}
          className="group flex items-start gap-4 rounded-xl border border-border/50 bg-card p-4 transition-all hover:border-saudi-green/50 hover:shadow-md"
        >
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-saudi-green/10">
            <FileText className="h-5 w-5 text-saudi-green" />
          </div>
          <div className="flex-1">
            <h4 className="mb-1 font-semibold text-foreground">{resource.title}</h4>
            <p className="text-sm text-muted-foreground">{resource.description}</p>
            {resource.type && (
              <span className="mt-2 inline-block text-xs text-muted-foreground">{resource.type}</span>
            )}
          </div>
          <Download className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-saudi-green" />
        </div>
      ))}
    </div>
  );
}
